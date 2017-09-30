
import { Cmp6059Component } from './cmp';
describe('Cmp6059Component', () => {
  it('should add', () => {
    expect(new Cmp6059Component().add6059(1)).toBe(6060);
  });
});