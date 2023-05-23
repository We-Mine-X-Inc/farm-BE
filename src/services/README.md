# Services

Folder containing classes for fetching and manipulating storage data. These classes are referred to as "services" and they are responsible for interacting with storage model objects in order to interact with the backing storage base. 

Ideally, classes would not be used and each function would be parameterized to accept its required dependencies. However, we have not discovered a DI library to make it easy to inject deps into standalone functions. Once it's found we will complete a migration.
