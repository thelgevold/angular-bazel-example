
import { Cmp7092Component } from './cmp';
describe('Cmp7092Component', () => {
  it('should add', () => {
    expect(new Cmp7092Component().add7092(1)).toBe(7093);
  });
});