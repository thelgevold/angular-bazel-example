
import { Cmp3553Component } from './cmp';
describe('Cmp3553Component', () => {
  it('should add', () => {
    expect(new Cmp3553Component().add3553(1)).toBe(3554);
  });
});