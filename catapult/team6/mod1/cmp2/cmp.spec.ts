
import { Cmp2612Component } from './cmp';
describe('Cmp2612Component', () => {
  it('should add', () => {
    expect(new Cmp2612Component().add2612(1)).toBe(2613);
  });
});