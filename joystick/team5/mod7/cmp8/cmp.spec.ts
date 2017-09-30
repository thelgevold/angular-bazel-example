
import { Cmp9578Component } from './cmp';
describe('Cmp9578Component', () => {
  it('should add', () => {
    expect(new Cmp9578Component().add9578(1)).toBe(9579);
  });
});