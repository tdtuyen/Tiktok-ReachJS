import PropTypes from 'prop-types';

import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "~/components/Image";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem( {data} ) {

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')}
                 src={data.avatar}
                 alt={data.full_name} />
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </Link>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;