
import { Cmp6630Component } from './cmp';
describe('Cmp6630Component', () => {
  it('should add', () => {
    expect(new Cmp6630Component().add6630(1)).toBe(6631);
  });
});