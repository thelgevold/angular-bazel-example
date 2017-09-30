
import { Cmp3579Component } from './cmp';
describe('Cmp3579Component', () => {
  it('should add', () => {
    expect(new Cmp3579Component().add3579(1)).toBe(3580);
  });
});