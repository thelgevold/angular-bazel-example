
import { Cmp6295Component } from './cmp';
describe('Cmp6295Component', () => {
  it('should add', () => {
    expect(new Cmp6295Component().add6295(1)).toBe(6296);
  });
});