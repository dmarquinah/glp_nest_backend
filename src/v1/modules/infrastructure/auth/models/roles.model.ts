export enum Role {
  COLLABORATOR = 'collaborator', // Works on warehouse, not able to see other people data
  SUPERVISOR = 'supervisor', // Supervise a group of collaborators in a warehouse, should only have access to supervised people's data
  MANAGER = 'manager', // Can manage one or many warehouses, should only be able to see data from managed warehouses
  ADMIN = 'admin', // Able to perform any action as admin
}
