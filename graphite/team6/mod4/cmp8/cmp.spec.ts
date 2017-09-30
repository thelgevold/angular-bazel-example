
import { Cmp6648Component } from './cmp';
describe('Cmp6648Component', () => {
  it('should add', () => {
    expect(new Cmp6648Component().add6648(1)).toBe(6649);
  });
});