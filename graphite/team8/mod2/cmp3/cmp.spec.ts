
import { Cmp6823Component } from './cmp';
describe('Cmp6823Component', () => {
  it('should add', () => {
    expect(new Cmp6823Component().add6823(1)).toBe(6824);
  });
});