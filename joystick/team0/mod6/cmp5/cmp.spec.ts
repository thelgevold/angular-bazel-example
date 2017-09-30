
import { Cmp9065Component } from './cmp';
describe('Cmp9065Component', () => {
  it('should add', () => {
    expect(new Cmp9065Component().add9065(1)).toBe(9066);
  });
});