
import { Cmp3823Component } from './cmp';
describe('Cmp3823Component', () => {
  it('should add', () => {
    expect(new Cmp3823Component().add3823(1)).toBe(3824);
  });
});