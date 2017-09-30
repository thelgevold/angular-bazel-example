
import { Cmp1978Component } from './cmp';
describe('Cmp1978Component', () => {
  it('should add', () => {
    expect(new Cmp1978Component().add1978(1)).toBe(1979);
  });
});