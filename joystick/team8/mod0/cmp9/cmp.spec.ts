
import { Cmp9809Component } from './cmp';
describe('Cmp9809Component', () => {
  it('should add', () => {
    expect(new Cmp9809Component().add9809(1)).toBe(9810);
  });
});