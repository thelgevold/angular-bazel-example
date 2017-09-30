
import { Cmp4330Component } from './cmp';
describe('Cmp4330Component', () => {
  it('should add', () => {
    expect(new Cmp4330Component().add4330(1)).toBe(4331);
  });
});