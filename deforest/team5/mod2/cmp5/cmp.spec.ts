
import { Cmp3525Component } from './cmp';
describe('Cmp3525Component', () => {
  it('should add', () => {
    expect(new Cmp3525Component().add3525(1)).toBe(3526);
  });
});