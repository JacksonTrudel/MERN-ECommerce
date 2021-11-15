import styles from '../styles/GlobalNavBar';

type NavBarItemProps = {
    label: string;
    isSelected: boolean;
    onClick: () => void;
};

function NavBarItem({ label, isSelected, onClick }: NavBarItemProps) {
    return (
        <div style={isSelected ? styles.pageNavSelectedItem : styles.pageNavItem} onClick={onClick}>
            {label}
        </div>
    );
}

export default NavBarItem;
