
import { Cmp6223Component } from './cmp';
describe('Cmp6223Component', () => {
  it('should add', () => {
    expect(new Cmp6223Component().add6223(1)).toBe(6224);
  });
});