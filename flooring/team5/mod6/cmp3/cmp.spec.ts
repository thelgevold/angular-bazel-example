
import { Cmp5563Component } from './cmp';
describe('Cmp5563Component', () => {
  it('should add', () => {
    expect(new Cmp5563Component().add5563(1)).toBe(5564);
  });
});