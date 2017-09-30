
import { Cmp7573Component } from './cmp';
describe('Cmp7573Component', () => {
  it('should add', () => {
    expect(new Cmp7573Component().add7573(1)).toBe(7574);
  });
});