
import { Cmp6402Component } from './cmp';
describe('Cmp6402Component', () => {
  it('should add', () => {
    expect(new Cmp6402Component().add6402(1)).toBe(6403);
  });
});