
import { Cmp6850Component } from './cmp';
describe('Cmp6850Component', () => {
  it('should add', () => {
    expect(new Cmp6850Component().add6850(1)).toBe(6851);
  });
});