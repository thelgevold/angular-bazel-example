
import { Cmp6364Component } from './cmp';
describe('Cmp6364Component', () => {
  it('should add', () => {
    expect(new Cmp6364Component().add6364(1)).toBe(6365);
  });
});