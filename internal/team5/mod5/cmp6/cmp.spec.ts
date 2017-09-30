
import { Cmp8556Component } from './cmp';
describe('Cmp8556Component', () => {
  it('should add', () => {
    expect(new Cmp8556Component().add8556(1)).toBe(8557);
  });
});