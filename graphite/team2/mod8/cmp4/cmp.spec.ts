
import { Cmp6284Component } from './cmp';
describe('Cmp6284Component', () => {
  it('should add', () => {
    expect(new Cmp6284Component().add6284(1)).toBe(6285);
  });
});