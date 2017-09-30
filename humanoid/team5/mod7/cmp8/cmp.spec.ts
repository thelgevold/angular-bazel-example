
import { Cmp7578Component } from './cmp';
describe('Cmp7578Component', () => {
  it('should add', () => {
    expect(new Cmp7578Component().add7578(1)).toBe(7579);
  });
});