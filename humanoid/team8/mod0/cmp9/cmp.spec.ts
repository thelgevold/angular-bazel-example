
import { Cmp7809Component } from './cmp';
describe('Cmp7809Component', () => {
  it('should add', () => {
    expect(new Cmp7809Component().add7809(1)).toBe(7810);
  });
});