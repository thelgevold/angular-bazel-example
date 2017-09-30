
import { Cmp9150Component } from './cmp';
describe('Cmp9150Component', () => {
  it('should add', () => {
    expect(new Cmp9150Component().add9150(1)).toBe(9151);
  });
});