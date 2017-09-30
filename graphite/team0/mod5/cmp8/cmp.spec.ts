
import { Cmp6058Component } from './cmp';
describe('Cmp6058Component', () => {
  it('should add', () => {
    expect(new Cmp6058Component().add6058(1)).toBe(6059);
  });
});