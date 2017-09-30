
import { Cmp3038Component } from './cmp';
describe('Cmp3038Component', () => {
  it('should add', () => {
    expect(new Cmp3038Component().add3038(1)).toBe(3039);
  });
});