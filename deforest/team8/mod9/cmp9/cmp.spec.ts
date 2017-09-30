
import { Cmp3899Component } from './cmp';
describe('Cmp3899Component', () => {
  it('should add', () => {
    expect(new Cmp3899Component().add3899(1)).toBe(3900);
  });
});