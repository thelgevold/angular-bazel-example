
import { Cmp6448Component } from './cmp';
describe('Cmp6448Component', () => {
  it('should add', () => {
    expect(new Cmp6448Component().add6448(1)).toBe(6449);
  });
});