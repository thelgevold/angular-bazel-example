
import { Cmp3881Component } from './cmp';
describe('Cmp3881Component', () => {
  it('should add', () => {
    expect(new Cmp3881Component().add3881(1)).toBe(3882);
  });
});