
import { Cmp9383Component } from './cmp';
describe('Cmp9383Component', () => {
  it('should add', () => {
    expect(new Cmp9383Component().add9383(1)).toBe(9384);
  });
});