const findAccountById = (accounts, accountId) => {
  // Finds and returns the account with the given ID
  return accounts.find(account => account.id === accountId);
};

const sortAccountsByLastName = (accounts) => {
  // Sorts the accounts by last name in alphabetical order
  return accounts.sort((accountA, accountB) => accountA.name.last.localeCompare(accountB.name.last));
};

const getAccountFullNames = (accounts) => {
  // Returns an array of full names (first and last) for each account
  return accounts.map(account => `${account.name.first} ${account.name.last}`);
};

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
