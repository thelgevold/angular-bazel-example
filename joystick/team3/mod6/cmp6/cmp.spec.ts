
import { Cmp9366Component } from './cmp';
describe('Cmp9366Component', () => {
  it('should add', () => {
    expect(new Cmp9366Component().add9366(1)).toBe(9367);
  });
});