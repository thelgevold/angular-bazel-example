
import { Cmp6381Component } from './cmp';
describe('Cmp6381Component', () => {
  it('should add', () => {
    expect(new Cmp6381Component().add6381(1)).toBe(6382);
  });
});