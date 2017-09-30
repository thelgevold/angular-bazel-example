
import { Cmp6931Component } from './cmp';
describe('Cmp6931Component', () => {
  it('should add', () => {
    expect(new Cmp6931Component().add6931(1)).toBe(6932);
  });
});