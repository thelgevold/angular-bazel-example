
import { Cmp7899Component } from './cmp';
describe('Cmp7899Component', () => {
  it('should add', () => {
    expect(new Cmp7899Component().add7899(1)).toBe(7900);
  });
});