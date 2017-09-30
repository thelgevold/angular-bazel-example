
import { Cmp6308Component } from './cmp';
describe('Cmp6308Component', () => {
  it('should add', () => {
    expect(new Cmp6308Component().add6308(1)).toBe(6309);
  });
});