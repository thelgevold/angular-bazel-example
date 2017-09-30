
import { Cmp6573Component } from './cmp';
describe('Cmp6573Component', () => {
  it('should add', () => {
    expect(new Cmp6573Component().add6573(1)).toBe(6574);
  });
});