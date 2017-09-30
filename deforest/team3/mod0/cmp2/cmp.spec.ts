
import { Cmp3302Component } from './cmp';
describe('Cmp3302Component', () => {
  it('should add', () => {
    expect(new Cmp3302Component().add3302(1)).toBe(3303);
  });
});