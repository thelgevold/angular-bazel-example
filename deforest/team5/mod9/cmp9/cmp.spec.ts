
import { Cmp3599Component } from './cmp';
describe('Cmp3599Component', () => {
  it('should add', () => {
    expect(new Cmp3599Component().add3599(1)).toBe(3600);
  });
});