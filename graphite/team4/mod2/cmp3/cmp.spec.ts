
import { Cmp6423Component } from './cmp';
describe('Cmp6423Component', () => {
  it('should add', () => {
    expect(new Cmp6423Component().add6423(1)).toBe(6424);
  });
});