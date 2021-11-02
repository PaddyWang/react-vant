import React, { useContext, useEffect } from 'react';
import cls from 'classnames';

import { SidebarProps } from './PropsType';
import useMergedState from '../hooks/use-merged-state';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Sidebar: React.FC<SidebarProps> = ({ children, className, style, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sidebar', prefixCls);
  const [bemWrap] = createNamespace('wrap', prefixCls);

  const [active, updateActive] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const getActive = () => active;

  const setActive = (value: number) => {
    if (value !== getActive()) {
      updateActive(value);
      props.onChange?.(value);
    }
  };
  useEffect(() => {
    console.log(children);
    console.log(getActive());
  }, []);
  const getContent = () => {
    console.log('11', children[getActive()]);
    if (children[getActive()]) {
      return children[getActive()].props.children;
    }
    return null;
  };
  return (
    <div className={cls(className, bemWrap())}>
      <div style={style} className={cls(className, bem())}>
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child: React.ReactElement, index: number) =>
            React.cloneElement(child, {
              index,
              parent: {
                setActive,
                getActive,
              },
            }),
          )}
      </div>
      <div>{getContent()}</div>
    </div>
  );
};

export default Sidebar;
