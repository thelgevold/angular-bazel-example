
import { Cmp6849Component } from './cmp';
describe('Cmp6849Component', () => {
  it('should add', () => {
    expect(new Cmp6849Component().add6849(1)).toBe(6850);
  });
});