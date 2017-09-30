
import { Cmp6842Component } from './cmp';
describe('Cmp6842Component', () => {
  it('should add', () => {
    expect(new Cmp6842Component().add6842(1)).toBe(6843);
  });
});