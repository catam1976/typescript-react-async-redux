import cx from 'classnames';
import { connect, MapStateToPropsParam } from 'react-redux';

import React from 'react';
import { VISIBILITY_FILTERS } from '../constants';
import { RootState } from '../store';
import { setFilterActionCreator } from '../store/visibility/actionCreators';
import { DisplayState } from '../store/visibility/types';

// tslint:disable-next-line:no-empty-interface
interface IOwnProps {
}

interface IStateProps {
    activeFilter: string;
}

interface IDispatchProps {
    setFilter: (filter: string) => void;
}

export type VisibilityFiltersProps = IOwnProps & IStateProps & IDispatchProps;

const VisibilityFilters: React.FunctionComponent<VisibilityFiltersProps> = (props) => (
    <div className='visibility-filters'>
        {

            Object.values(VISIBILITY_FILTERS).map((filter) => (
                    <span
                        key={`visibility-filter-${filter}`}
                        className={cx('filter', (filter === props.activeFilter) ? 'filter--active' : '')}
                        onClick={(event) => props.setFilter(filter)}
                    >
                            {filter}
                    </span>
                )
            )
        }
    </div>
);

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, RootState> =
    (state: RootState, ownProps: IOwnProps) => {
        const displayState: DisplayState = state.display;

        return {
            activeFilter: displayState.visibilityFilter
        };
    };

// export default VisibilityFilters;
export default connect(
    mapStateToProps,
    {setFilter: setFilterActionCreator}
)(VisibilityFilters);
