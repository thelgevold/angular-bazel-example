
import { Cmp7330Component } from './cmp';
describe('Cmp7330Component', () => {
  it('should add', () => {
    expect(new Cmp7330Component().add7330(1)).toBe(7331);
  });
});