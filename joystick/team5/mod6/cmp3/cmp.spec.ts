
import { Cmp9563Component } from './cmp';
describe('Cmp9563Component', () => {
  it('should add', () => {
    expect(new Cmp9563Component().add9563(1)).toBe(9564);
  });
});